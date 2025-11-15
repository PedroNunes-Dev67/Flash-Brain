'use client'


import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Home(){
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [senha2,setSenha2] = useState("");
  const [name,setName] = useState("");

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
      <Image src= "/flash-brain1.0.png" width={200} height={120} className={styles.Image} alt='logo'></Image>
      <div className={styles.form}>
        <h1>Cadastre sua conta?</h1>
        <h2>Simples, rápido e fácil!</h2>
        <form onSubmit={handlerLogin}> 
            <input type="text" required  placeholder='Digite Seu Nome'className={styles.inputs} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" required  placeholder='Digite Seu Email'className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required  placeholder='Digite Sua Senha'className={styles.inputs} value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input type="password" required  placeholder='Confirme Sua Senha'className={styles.inputs} value={senha2} onChange={(e) => setSenha2(e.target.value)} />
            <input type="submit" value={"Enviar"} className={styles.botao} />
        </form>        
        <span className={styles.span}>Já possui uma conta? <Link href={"#"}>Logue-se</Link></span>  
        <span className={styles.span}>Não possui uma conta? <Link href={"/cadastro"}>Cadastre-se</Link></span>
      </div>
    
    </main>
  )  
}
