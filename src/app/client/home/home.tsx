"use client";
import { useCallback, useState } from "react";
import { Container } from "@/app/components/container";
import { Button } from "@/app/components/button";
import { css } from "../../../../styled-system/css";
import { TextArea } from "@/app/components/textarea";
import { Title } from "@/app/components/title";
import { Box } from "@/app/components/box";
import { apiClient } from "@/app/boundary/api/api-client";

export default function Home() {
  const [inputArea, setInputArea] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const onSubmit = useCallback(async () => {
    try {
      const response = await apiClient.translate(inputArea);
      if (response && response.translatedText) {
        setOutput(response.translatedText);
      } else {
        console.error("Error in response:", response);
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  }, [inputArea]);

  return (
    <Container>
      <Title title="Translation App"></Title>
      <Box>
        <TextArea
          placeholder="Input text"
          value={inputArea}
          onChange={(e) => setInputArea(e.target.value)}
        />
        <Button type="submit" onClick={onSubmit}>
          Translate
        </Button>
      </Box>
      <Box>
        <textarea
          className={css({
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
          })}
          placeholder="Translated text"
          value={output}
          readOnly
        />
        <Button
          type={"submit"}
          onClick={() => navigator.clipboard.writeText(output)}
        >
          Copy
        </Button>
      </Box>
    </Container>
  );
}
