const Set = (props) => {
    const {img, name, number, } = props;
    //console.log(props);

    return (
        <article className='set'>
            <img src={img} alt={name} />
            <h2>{number}</h2>
            <h4>{name}</h4>
        </article>
    );
};

export default Set;