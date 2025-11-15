'use client'


import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Home(){
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  function handlerLogin(e){
    e.preventDefault();

    if(email === "admin@gmail.com" && senha === "1234"){
      window.location.href="/pages/home"
    }
    else{
      window.location.reload();
    }
    
  }

  return (
    <main className={styles.container}>
      <Image src= "/flash-brain1.0.jpg" width={200} height={120} className={styles.Image} alt='logo'></Image>
      <div className={styles.form}>
        <h1>Já possui uma conta?</h1>
        <h2>Faça seu login e <span>bons estudos!</span></h2>
        <form onSubmit={handlerLogin}> 
          <input type="text" required  placeholder='Email'className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Senha' required className={styles.inputs} value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="submit" value={"Entrar"} className={styles.botao} />
        </form>
        <span className={styles.span}>Esqueceu sua senha? <Link href={"/redefinirSenha"}>Clique aqui!</Link></span>
        <span className={styles.span}>Não possui uma conta? <Link href={"/cadastro"}>Cadastre-se</Link></span>
      </div>
    </main>
  )  
}