import os

with open("../components/Icons.js", "w") as icons_file:
    for root, dirs, files in os.walk("../svg"):
        for file in files:
            icon_full_name = root + os.sep + file
            with open(icon_full_name, "r") as icon:
                icons_file.write("const Backetball = (props) => { return (")
                for line in icon.readlines():
                    line = line.replace("svg", "Svg")
                    line = line.replace("path", "Path")
                    if line.find("<Svg") >= 0:
                        line = line.replace("style=\"", "")
                        line = line.replace("width:", "width={")
                        line = line.replace("px;height:", "} {height={")
                        line = line.replace("px", "}")
                        line = line.replace(">", " {...props}>")
                    icons_file.write(line)
                icons_file.write("};}\n")
