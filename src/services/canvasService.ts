import { ICompanies } from '@constants/types';
import { ICanvasService } from './types';

class CanvasService implements ICanvasService {
  readonly rectangleWidth = 50;
  readonly rectangleHeight = 50;
  readonly verticalPaddingRectangles = 125;
  readonly horizontalPaddingRectangles = 100;
  public drawVertical(canvas: HTMLCanvasElement, company: ICompanies[], context: CanvasRenderingContext2D) {
    let x: number = 37;
    let y: number = canvas.height;

    if (!canvas) return;
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < company.length; i++) {
      context.fillStyle = company[i].color;
      context.font = 'bold 12px normal';
      context.textAlign = 'center';
      context.fillText(
        `${String(company[i].price.toFixed(2))}$`,
        x + this.rectangleWidth / 2,
        380 + -company[i].price * 4
      );
      context.fillRect(x, y, this.rectangleWidth, -company[i].price * 4);

      x += this.verticalPaddingRectangles;
    }

    context.beginPath();
    context.moveTo(canvas.width, canvas.width - 100);
    context.lineTo(0, canvas.width - 100);
    context.strokeStyle = '#4F84C8';
    context.lineWidth = 3;
    context.stroke();
    context.restore();
  }

  public drawHorizontal(canvas: HTMLCanvasElement, company: ICompanies[], context: CanvasRenderingContext2D) {
    const x: number = 0;
    let y: number = 0;

    if (!canvas) return;
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < company.length; i++) {
      context.fillStyle = company[i].color;
      context.font = 'bold 12px normal';
      context.textAlign = 'center';

      context.fillText(`${String(company[i].price.toFixed(2))}$`, company[i].price * 6 + 35, y + 25);
      context.fillRect(x, y, company[i].price * 6, this.rectangleHeight);

      y += this.horizontalPaddingRectangles;
    }

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, canvas.height - 45);
    context.strokeStyle = '#4F84C8';
    context.lineWidth = 3;
    context.stroke();
    
  }
}

export const canvasService = new CanvasService();