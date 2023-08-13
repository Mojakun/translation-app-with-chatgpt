"use client";
import { useCallback, useState } from "react";
import { Container } from "../../components/container";
import { Button } from "../../components/button";
import { css } from "../../../../styled-system/css";
import { useForm } from "react-hook-form";
import { TextArea } from "@/app/components/textarea";
import { Title } from "@/app/components/title";
import { Box } from "@/app/components/box";
import { apiClient } from "@/app/boundary/api/api-client";

type FormData = {
  inputArea: string;
};

export default function Home() {
  const [output, setOutput] = useState<string>("");
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = useCallback(async (data: FormData) => {
    try {
      const response = await apiClient.translate(data.inputArea);
      if (response && response.translatedText) {
        setOutput(response.translatedText);
      } else {
        console.error("Error in response:", response);
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  }, []);

  return (
    <Container>
      <Title title="Translation App"></Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextArea
            placeholder="Input text"
            {...register("inputArea", { required: "入力してください" })}
          />
          <Button type="submit">Translate</Button>
        </Box>
      </form>
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
