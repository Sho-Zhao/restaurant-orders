export default function DrinkList({name, img}){
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} />
        </div>
    )
}