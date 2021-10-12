import React, { ReactElement, useEffect, useState } from "react";
import { Modal } from "@material-ui/core";

export default function PostModal({ open, setOpen, picId }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          window.history.replaceState(null, "", `/`);
          setOpen(false);
        }}
        aria-labelledby="Zoomed View"
        aria-describedby="Larger view of gallery picture"
      >
        <div className="modal-post-container">
          <PostFetch paramPostId={id} />
        </div>
      </Modal>
    </div>
  );
}
