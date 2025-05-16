def create_divs():
    html = ""
    size = 10  # დავიწყოთ ზომით 10px
    for i in range(10):
        # prepend - თითოეული div დავამატოთ ხოლმე html-ის დასაწყისში
        html = f'<div style="width:{size}px; height:{size}px; background-color: lightblue; margin: 5px;">Div {i+1}</div>\n' + html
        # append - შემდეგ დავამატოთ div ბოლოს
        html += f'<div style="width:{size}px; height:{size}px; background-color: lightgreen; margin: 5px;">Div {i+1}</div>\n'
        # ზომის გაორმაგება
        size *= 2

    return html

# ტესტირება
html_output = create_divs()
print(html_output)
