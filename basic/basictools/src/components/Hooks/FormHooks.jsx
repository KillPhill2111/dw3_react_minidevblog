import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Leticia', 'Enzo', 'Kayro', 'Gustavo']);

    const [number, setNumber] = useState(15)
    const [user] = useState(
        [
            { id: 1, nome: 'José Carlos', idade: 44 },
            { id: 2, nome: 'Maria Rosa', idade: 25 },
            { id: 3, nome: 'Ana Sofia', idade: 31 },
            { id: 4, nome: 'Paulo José', idade: 21 },
            { id: 5, nome: 'Marcos Daniel', idade: 25 },
            { id: 6, nome: 'Victor Hugo', idade: 34 },
            { id: 7, nome: 'Viktoria Kamilly', idade: 19 },
            { id: 8, nome: 'José Carlos', idade: 37 }
        ]
    )
    return (
        <>
            <div>
                <p>
                    <strong>Valor do numero: </strong>{number}
                </p>
                <button onClick={() => {
                    setNumber(32);
                    console.log(number)
                }}>Mudar</button>


            </div>
            <div>
                <ul>
                    {
                        list.map((item, i) => (
                            <li key={i}>{i}: {item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Idade
                        </th>
                        <tr>
                            {
                                user.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.idade}</td>
                                    </tr>

                                ))
                            }
                            
                        </tr>
                    </tr>

           
                </table>
            </div>
        </>
    )
}

export default FormHooks