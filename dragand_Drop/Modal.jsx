import { Button, Modal,Stack ,Paper} from "@mui/material";

import React, { useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import FolderIcon from "@mui/icons-material/Folder";

function Modals() {
    let [modalOpen, setModelOpen] = useState(false);
    return (
        <Stack
            justifyContent={"center"}
            alignItems="center"
            height="100vh"
            flexDirection={"row"}
        >
            <Button
                variant="contained"
                endIcon={<UploadIcon />}
                onClick={() => setModelOpen(true)}
            >
                upload
            </Button>

            <Modal
                open={modalOpen}
                closeAfterTransition
                onClose={() => {
                    alert();
                }}
            >
                <Stack
                    width="100%"
                    height="100%"
                    justifyContent={"center"}
                    alignItems="center"
                    flexDirection={"column"}
                >
                    <Paper
                        sx={{
                            height: "90%",
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        id="drop"
                    >
                        <Stack
                            direction={"row"}
                            height="90%"
                            width="90%"
                            alignItems="center"
                            justifyContent={"center"}
                            border="3px dotted black"
                        >
                    
                        </Stack>
                    </Paper>
                </Stack>
            </Modal>
        </Stack>
    );
}

//const dropzone = new Dropzone("drop", { url: "/file/post" });

export default Modals;
