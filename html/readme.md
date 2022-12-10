html; css có phải ngôn ngữ lập trinh: không phải mà chỉ có js
js: ngôn ngữ lập trình

1/ Khai báo biến: var, let, const
var let const
Thay đổi giá trị T T F
re-declare T F F
hosting (khai báo biến lên đầu) T F F

2/ Các kiểu dữ liệu trong js:

- 2 kiểu dữ liệu chính:
  - Kiểu nguyên thuỷ: Primitive type
    -- STRING, NUMBER, BOOLEAN (True - Flase), UNDEFINED, NULL
  - Kiểu object
    -- OBJECT, ARRAY, FUNTION

3/ == và ===

- == so sánh giá trị
- === so sánh giá trị và kiểu dữ liệu
- Lưu ý: Nếu so sánh == thì 0 = falsch và 1 = true

4/ Tham trị và tham chiếu

- tham trị (Kiểu dữ liệu nguyên thuỷ)
- tham chiếu (Kiểu dữ liệu object)

//DOM
1/ Lấy element ra + Theo ID
const text = document.getElementById("text-id")
2/ Gán event
text.addEventListener("click",() => {
alert('Hallo')
