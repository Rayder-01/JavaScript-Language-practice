from flask import Flask,render_template
web = Flask(__name__)  # __name_ 代表目前執行的模組

@web.route("/") 
def home():
    return render_template("home.html")

if __name__ == "__main__":  # 如果以主程式執行
    web.debug = True  
    web.run()                # 立刻啟動伺服器