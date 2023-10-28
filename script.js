let leftBlock = document.querySelectorAll('.leftBlock li');
let middleBlock = document.querySelector('.middleBlock');
let bookslist=document.querySelector('.bookslist');
let rightBlock=document.querySelector('.rightBlock');
let sale=document.querySelector('.sale');
let btn1=document.querySelector('.btn');


const saleinformation={
    "Сучасна література":"Ця книжка екранізована",
    "Дитяча література":"Бестселери в даній категорї",
    "Методичні матеріали":"Незамінна річ для вашої дитини",
}

let bookscatalouge={
    "Сучасна література":["Прислуга","Страшенно голосно і неймовірно близько","Малавіта"],
    "Дитяча література":["Друзяки динозаврики","Історія про піратів","Кнопик переможець"],
    "Методичні матеріали":["Вчимося писати","Вчимося читати","Вчимося рахувати"],

}

leftBlock.forEach((category) => {
                category.addEventListener("click", () => {
                    let BookName = category.textContent;
                    let BookProducts = bookscatalouge[BookName];
                    bookslist.innerHTML = "";
                    BookProducts.forEach((books) => {
                        let li = document.createElement("li");
                        li.textContent = books;
                        li.addEventListener("click", ( ) => {
                           
                           sale.innerHTML=" ";
                           let p= document.createElement("p");
                           p.textContent=saleinformation[BookName];
                           sale.appendChild(p);
                            rightBlock.style.display = "block";
                        });
                        bookslist.appendChild(li);
                    });
                    middleBlock.style.display = "block";
                    rightBlock.style.display = "none";
                });
            });
    
            btn1.addEventListener("click", () => {
                alert("Товар куплений");
                sale.textContent = " ";
                rightBlock.style.display = "none";
                middleBlock.style.display = "none";
            });
    



