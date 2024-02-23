function Filter({inputValue,onChangeInput}){
  return (
    <div>
      filter : <input type="text" value={inputValue} onChange={onChangeInput} />
    </div>

  )
}

export {Filter}