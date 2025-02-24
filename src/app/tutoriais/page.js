"use client"
import React from "react";
import ReactPlayer from "react-player";
import Navbar from "@/components/navbar/Navbar";
import './styles.css';

export default function FormularioSerrafrete() {


  return (<>
    <Navbar />
    <div className="containerMotoPage">
      <div className="containerVideo">
        <h1>Dicas e tutoriais</h1>
      </div>


      <div className="containerVideo">
        <div>
          <h2>Teto tabicado</h2>
          <ReactPlayer
            url="https://www.youtube.com/playlist?list=PLzC8JLc4n2bRVUpEM5OVFXeRnvWrDb3lR"
            width="100%"
            height="315px"
            controls
          />
        </div>
      </div>
      <div className="containerVideo">
        <h2>Parede / divisória</h2>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5nl87j55nMY&t=2s"
          width="100%"
          height="315px"
          controls
        />
      </div>
      <div className="containerVideo">
        <h2>Isolamento com lã de rocha</h2>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PDOPScxj5YQ&list=PLzD3LQtjfO9GDtP8_h3DUoV4AWJXDmvGS"
          width="100%"
          height="315px"
          controls
        />
      </div>
      <div className="containerVideo">
        <h2>PISTOLA FINCA PINO</h2>
        <p>As 5 principasi dúvidas sonre fixação a pólvora.</p>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=XWV_45xzGzs"
          width="100%"
          height="315px"
          controls
        />
      </div>



    </div></>
  )
}
