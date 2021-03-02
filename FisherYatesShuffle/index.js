// Алгоритм смещивания массива по алгоритму Фишера Ятеса который называется Fisher - Yates Shuffle

let arr = [10, 3, 4, 5, 6]

console.log(shuffleArray(arr))

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        // Берем рандомный индекс в массиве
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // Теперь наш randomIndex будем менять местами с текущим индексом
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}