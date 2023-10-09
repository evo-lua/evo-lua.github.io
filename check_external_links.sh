set -e

DOCS_DIR=build/docs

# We want to find all links to code and/or external docs in the organization
GITHUB_REPOSITORY_LINK="https://github.com/evo-lua/evo-runtime"
GITHUB_ERROR_PATTERN="This is not the web page you are looking for."

LOG_FILE=external-links.txt

run_cleanup_tasks() {
	rm --force $LOG_FILE
}

if ! command -v pup
then
	echo "Installing pup..."
	go install github.com/ericchiang/pup@latest
	sudo mv $(go env GOPATH)/bin/pup /usr/bin
fi

find_html_links() {
    RELEVANT_FILES=$(find $DOCS_DIR -type f)
    for file in $RELEVANT_FILES
    do
        echo
        echo "Collecting external links: $file"
        cat $file | \
        pup 'a[href] attr{href}' | \
        # We only care about cross-repo links to the organization
        grep -E $GITHUB_REPOSITORY_LINK/blob/main/* >> $LOG_FILE || true
        # Sanity check: Docusaurus can't find dead links in this case, apparently
        echo "Checking for accidental relative links in $file"
        BROKEN_LINK=$(cat $file | pup 'a[href] attr{href}' | grep -E "^/docs/.*docs.*" || true)
        if [[ ! -z $BROKEN_LINK ]]; then
            echo "Error: Accidental relative link detected in $file ($BROKEN_LINK)"
            exit 1
        fi
    done
	
	echo
	echo "Dumping results from log file $LOG_FILE..."
	echo
	echo "--- Start of file ---"
	cat $LOG_FILE
	echo "--- End of file ---"
	echo
}

check_link_availability() {
	LINKS_TO_CHECK=$(cat $LOG_FILE)
	for URL in $LINKS_TO_CHECK
	do
		echo "Checking availability: $URL"
		set +e
		curl $URL --silent | grep "$GITHUB_ERROR_PATTERN" --color
		if test $? -eq 1 # Found no  match = not a 404 error page
		then
			echo "$URL: OK"
		else
			echo "$URL: DEAD LINK"
			run_cleanup_tasks
			exit 1
		fi
		echo
	done
}

find_html_links
check_link_availability
run_cleanup_tasks
