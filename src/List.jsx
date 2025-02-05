function List(props) {
    if (!props.animals) {
      return <div>Loading...</div>;
    }
  
    if (props.animals.length === 0) {
      return <div>There are no animals in the list.</div>;
    }
  
    return (
      <>
        <ul>
            {
            props.animals.map((animal) => {
              return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
              // return <li key={animal}>{animal}</li>;
            })
          }
        </ul>
      </>
    );
  }

  export default List;