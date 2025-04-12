from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_div = False
        self.in_child = False
        self.child_texts = []

    def handle_starttag(self, tag, attrs):
        if tag == 'div':
            self.in_div = True
        elif self.in_div:
            self.in_child = True

    def handle_endtag(self, tag):
        if tag == 'div':
            self.in_div = False
        elif self.in_div and self.in_child:
            self.in_child = False

    def handle_data(self, data):
        if self.in_div and self.in_child:
            text = data.strip()
            if text:
                self.child_texts.append(text)

def print_div_children_text(html):
    parser = MyHTMLParser()
    parser.feed(html)

    if parser.child_texts:
        for text in parser.child_texts:
            print(text)
    else:
        print("There is no text!")
