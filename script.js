 const object = {
}
for(let i = 1; i<11; i++){
    let username = prompt('Введите имя пользователя')
    let userage = +prompt('Введите возраст')
    object[i] = {
        name: username,
        age: userage
    }
    console.log('Пользователь ' + i)
    console.log(`Имя  ${username}`); 
    console.log(`Возраст  ${userage}`);
}
console.log(object)
