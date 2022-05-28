export interface GeneratedImage{
    id: number,
    GeneratedImagePath: string,


}

export type PostGeneratedImage = Omit<GeneratedImage, "id">;