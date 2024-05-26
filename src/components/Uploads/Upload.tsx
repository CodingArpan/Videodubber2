// @ts-nocheck
import { useRef, useState ,useContext} from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";
import { FileContext } from "@/context/MediaContext";

export function Upload() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);
  const { videoFile, setVideoFile, audioFile, setAudioFile } = useContext(FileContext);


  const handleDrop = (files) => {
    console.log(files);
    console.log("end");

    

    const video = files.find((file) => file.type.startsWith("video/"));
    const audio = files.find((file) => file.type.startsWith("audio/"));
    if (video) setVideoFile(URL.createObjectURL(video));
    if (audio) setAudioFile(URL.createObjectURL(audio));
  };
  return (
    <>
      {!videoFile && (
        <div className={classes.wrapper}>
          <Dropzone
            openRef={openRef}
            onDrop={(e) => {
              console.log("start");
              handleDrop(e);
            }}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.mp4]}
            maxSize={300 * 1024 ** 2}
          >
            <div className="max-w-lg px-5" style={{ pointerEvents: "none" }}>
              <Group justify="center">
                <Dropzone.Accept>
                  <IconDownload
                    style={{ width: rem(50), height: rem(50) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{ width: rem(50), height: rem(50) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload
                    style={{ width: rem(50), height: rem(50) }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="xl">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload resume</Dropzone.Idle>
              </Text>
              <Text ta="center" fz="sm" mt="xs" c="dimmed">
                Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
                <i>.pdf</i> files that are less than 30mb in size.
              </Text>
            </div>
          </Dropzone>

          <Button
            className={classes.control}
            size="md"
            radius="xl"
            onClick={() => openRef.current?.()}
          >
            Select files
          </Button>
        </div>
      )}

     
    </>
  );
}
