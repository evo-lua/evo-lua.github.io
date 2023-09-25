import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Data
layers = [
    "Command Line Interface (Shell)",
    "Namespaced High-Level APIs (Lua)",
    "Nonstandard Libraries (Lua)",
    "C-API Bindings (Lua)",
    "FFI Bindings (LuaJIT)",
    "FFI C Interface Glue (C++)",
    "Native Runtime (C++)"
]
layers.reverse()

# Control levels
control_level_offset = 3 # How large the smallest control level should be
control_levels = [control_level_offset + 0, control_level_offset + 1, control_level_offset + 2, control_level_offset + 3, control_level_offset + 4, control_level_offset + 5, control_level_offset + 6]
control_levels.reverse()

# Create figure and axes
fig, ax = plt.subplots(figsize=(control_level_offset + 8, 7))

# Set title
ax.set_title("Evo.lua API Layers")

# Plot each layer
y = 0
height = 1
for layer, control in zip(layers, control_levels):
    ax.add_patch(patches.Rectangle((0, y), control, height, facecolor="skyblue", edgecolor="black"))
    plt.text(0.1, y+0.5, layer, horizontalalignment='left', verticalalignment='center', fontsize=10)
    y += height

# Set labels and limits
ax.set_xlabel("Level of Control")
ax.set_ylabel("Ease of Use")
ax.set_xticks([0, 9])
ax.set_xticklabels([])
ax.set_yticks([i+0.5 for i in range(len(layers))])
ax.set_yticklabels([])
ax.xaxis.set_ticks_position('none')
ax.yaxis.set_ticks_position('none')
ax.set_xlim(0, len(control_levels) + control_level_offset)
ax.set_ylim(0, len(layers) + 1)

# Remove right and top spines for aesthetics
ax.spines['right'].set_visible(False)
ax.spines['top'].set_visible(False)

# Need to use width and height of the axes to render arrows proportionally in size
dps = fig.dpi_scale_trans.inverted()
bbox = ax.get_window_extent().transformed(dps)
width, height = bbox.width, bbox.height

# Compute arrowhead width and length
xmin, xmax = ax.get_xlim() 
ymin, ymax = ax.get_ylim()
arrow_scale = 1./3
hw = 1./20.*(ymax-ymin) 
hl = 1./20.*(xmax-xmin)
lw = 1. # Axis line width
ohg = 0.3 # Arrow overhang

# Compute matching arrowhead length and width
yhw = hw/(ymax-ymin)*(xmax-xmin)* height/width 
yhl = hl/(xmax-xmin)*(ymax-ymin)* width/height

# Draw x and y axis
ax.arrow(xmin, 0, xmax-xmin, 0., fc='k', ec='k', lw = lw, 
			head_width=arrow_scale * hw, head_length=arrow_scale * hl, overhang = ohg, 
			length_includes_head= True, clip_on = False) 
ax.arrow(0, ymin, 0., ymax-ymin, fc='k', ec='k', lw = lw, 
			head_width=arrow_scale * yhw, head_length=arrow_scale * yhl, overhang = ohg, 
			length_includes_head= True, clip_on = False)

# Save the plot to a file
file_name = "docs/getting-started/layered-architecture.png"
plt.tight_layout()
plt.savefig(file_name, dpi=300)

print(f"Diagram saved as {file_name}")
