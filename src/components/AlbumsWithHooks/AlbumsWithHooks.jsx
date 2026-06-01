import React, { useState } from "react";
import { api } from "../../config/properties";
import useFetch from "../../utils/FetchHook";
import { createPortal } from "react-dom";

export const AlbumsWithHooks = () => {
  const [data] = useFetch(`${api.root}/albums`);
  const [portalUse, setPortalUse] = useState(false);

  const container = document.getElementById("albums-header");

  return (
    <div id="albums">
      <h2>Albums</h2>
      <div id="albums-header"></div>
      {portalUse && createPortal(<p>This is protal code</p>, container)}

      <button
        onClick={() => {
          setPortalUse(!portalUse);
        }}
      >
        Portal
      </button>
      {data &&
        data.map((album) => {
          return <p key={album.id}>{album.title}</p>;
        })}
    </div>
  );
};
