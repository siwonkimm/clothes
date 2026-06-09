import streamlit as str
import streamlit.components.v1 as components

# 웹페이지 브라우저 탭 이름 설정
st.set_page_config(page_title="오늘의 날씨 OOTD", layout="wide")

# index.html 파일 읽어오기
with open("기계학습과제2/index.html", "r", encoding="utf-8") as f:
    html_code = f.read()

# Streamlit 화면에 HTML 전체 화면으로 띄우기
components.html(html_code, height=900, scollable=True)