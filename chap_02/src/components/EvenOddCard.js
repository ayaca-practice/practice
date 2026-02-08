import evenOddCheck from '../features/evenOddCheck';

const EvenOddCard = () => {
    const number = 3;
    const numberList = [1, 2, 3, 4, 5];
    const book = {
        title: 'JavaScript入門',
        author: '田中太郎',
        bookCall() {
            return `ようこそ！${this.title} by ${this.author}を学びましょう。`;
        }
    }
    console.log(`numberの値は${number}`);
    return (
        <div>
            <h2>数字リスト</h2>
            {numberList.map(num => (
                <p key={num}>数字: {num}, 偶奇チェック: {evenOddCheck(num)}</p>
            ))}
            {/* <p>現在の数字は{number}</p> */}
            {/* <p>これは{evenOddCheck(number)}です</p> */}

            <h2>本の情報</h2>
            <p>タイトル: {book.title}</p>
            <p>著者: {book.author}</p>
            <p>{book.bookCall()}</p>
        </div>
    )
};
export default EvenOddCard;