DOCS_DIR=build/docs

# We want to find all links to code and/or external docs in the organization
GITHUB_ORGANIZATION_LINK="https://github.com/evo-lua/evo-luvi"
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

find_external_links() {
	RELEVANT_FILES=$(find $DOCS_DIR -type f)
	for file in $RELEVANT_FILES
	do
		echo
		echo "Collecting external links: $file"
		cat $file | \
		pup 'a[href] attr{href}' | \
		# We only care about cross-repo links to the organization
		grep -E $GITHUB_ORGANIZATION_LINK/blob/main/* >> $LOG_FILE
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

find_external_links
check_link_availability
run_cleanup_tasks
