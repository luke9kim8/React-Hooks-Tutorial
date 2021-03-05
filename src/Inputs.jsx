const Inputs = () => {
  return (
    <div>
      <input
            type="radio"
            name="hobby"
            value="Cycling"
            onChange={onChangeHandler}
          />
      <input
            type="radio"
            name="hobby"
            value=""
            onChange={onChangeHandler}
          />
      <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={onChangeHandler}
          />
    </div>
  )
}