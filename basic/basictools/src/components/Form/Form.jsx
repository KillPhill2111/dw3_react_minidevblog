import React from 'react'

const Form =() =>{
    const handleMyEvent=(e)=>{
        console.log(e)
        console.log('Ativou o evento!')
    }
const renderButton=(x)=>{
    if(x){
        return <h1>Renderizou Bonitinho!</h1>
    }else{
        return <h1>Renderizou lindinho!</h1>
    }
}
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click aqui</button>
            </div>
            <div>
                <button onClick={()=>{console.log("Yesss!! clicou !!!")}}>Clicka em mim tambem !</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso não deveria acontecer")
                    }
                }}>Será que vc clicaria aqui ?
                </button>
            </div>
            <div>
                {renderButton(true)}
                {
                    renderButton(false)
                }
            </div>
        </div>
        
    )
}


export default Form