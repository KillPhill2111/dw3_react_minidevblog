import React from 'react'
import styles from "./Dashboard.module.css"
import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { userFetchDocuments } from '../../hooks/userFetchDocuments'
import { userDeleteDocument } from '../../hooks/userDeleteDocument'



const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid

  const { documents: posts } = userFetchDocuments('posts', null, uid)
  const { deleteDocuments } = userDeleteDocument("posts")

  console.log(uid)
  console.log(posts)

  return (
    <div className={styles.Dashboard}>
      <p>Gerencie seus posts</p>
      {
        posts && posts.lenght ===0 ? (
          
          <div className={noposts}>
            <p>Não foram encontrados posts...</p>            
            <Link to="/posts/create" className="btn"></Link>
          </div>
          
        ) : (
          <div className={styles.post_row} key={posts.id}> 
            <p>{posts.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${posts.id}`} className='btn btn-outline'>Ver</Link>
            </div>
            <div className={styles.actions}>
              <Link to={`/posts/editar/${posts.id}`} className='btn btn-outline'>Editar</Link>
            </div>
          </div>
        ) 
      }
    </div>
  )
}

export default Dashboard
