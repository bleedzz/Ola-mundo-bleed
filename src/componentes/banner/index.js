import React from 'react'
import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, mundo!</h1>
            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Raphael Fattori, desenvovedor em formação. Aqui demonstro um projeto  SPA (single page application) além de uma área falando sobre mim, espero que goste!
            </p>
        </div>
        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
            />
            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="foto do Raphael Fattori"
            />
        </div>

    </div>
    
  )
}
