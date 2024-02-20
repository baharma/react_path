function Article(props){
    const name = "haiya"
    const test = ['dasar','inijuga dasar',1000]
    return (
        <>
            <div>{props.name}</div>
            <div>
                {props.title.map((tests)=>{
                    return <div>{tests}</div>
                })}
            </div>
        </>
    );

    }
export default Article;