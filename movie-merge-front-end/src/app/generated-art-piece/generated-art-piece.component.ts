import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generated-art-piece',
  templateUrl: './generated-art-piece.component.html',
  styleUrls: ['./generated-art-piece.component.css']
})
export class GeneratedArtPieceComponent implements OnInit {

  constructor() { }

  @Input() imageURL1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLpXAcEOU1oM8rxXmDAnXQ67BkVKcIiLh1k36ciZb1s8o9Widrm_aVkW4RLim4js5oXE&usqp=CAU"
  @Input() imageURL2 = "https://www.bbc.co.uk/staticarchive/7cf304f4c8247778c016427702ffb5448aa15467.jpg"
  @Input() imageURL3 = "https://cdn.openai.com/dall-e-2/demos/text2im/astronaut/horse/photo/0.jpg"
  @Input() imageURL4 = "https://cdn.openai.com/dall-e-2/demos/inpainting/flamingo_pool/a/0.jpg"
 
  ngOnInit(): void {
  }

}
