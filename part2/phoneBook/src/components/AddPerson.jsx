function AddPerson({onSubmit,nameValue,onChangeName,numberValue,onChangeNumber}){
  return  (
    <div>
       <form onSubmit={onSubmit}>
        <div>
          <div>
          name: <input  value={nameValue} onChange={onChangeName}/>
          </div>
          <div>
          number: <input type="text" onChange={onChangeNumber} value={numberValue} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export {AddPerson}