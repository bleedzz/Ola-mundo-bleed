import PostModelo from 'componentes/postModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './sobremim.module.css'
import fotosobremim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (

    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"




    >
      <h3 className={styles.subtitulo}> Olá, eu sou o Raphael!</h3>
      <img src={fotosobremim}
        alt="foto sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou desenvovedor de Front-end em formação e estou feliz de te ver por aqui.</p>

        <p className={styles.paragrafo}>Minha história próximo a área começou bem cedo, por volta dos meus 9 anos comecei a me interessar por computadores e com 11 comecei a aprender a consertar alguns.</p>

        <p className={styles.paragrafo}>Aos meus 14 anos já era comum eu passar o dia todo no computador, o que me gerou interesse em profissões que utilizassem o mesmo, foi ai que meu interesse por programação começou. </p>
        
      <p className={styles.paragrafo}>Como uma pequena ajuda pra melhorar meu PC e coisas do gênero eu costumava fazer serviços de manutenção de computadores e como hobby estudava uma coisa ou outra sobre desenvolvimento.</p>

        <p className={styles.paragrafo}>Mas foi no final de 2022 que conheci dois amigos que já atuam na área como dev's fullstacks a algum tempo, o que me gerou muita empolgação para mergulhar na área de desenvolvimento.</p>

        <p className={styles.paragrafo}>Desde então, venho estudado com afinco, várias horas por dia desenvolvimento front-end,o que me gerou diversos conhecimentos de HTML,CSS,JS,REACT e muito mais, este é somente um de meus diversos projeto, espero que goste!</p>




    </PostModelo>

  )
}
