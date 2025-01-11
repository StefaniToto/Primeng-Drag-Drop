import { Pipe, PipeTransform } from "@angular/core";
import { FormControl } from "@angular/forms";
@Pipe({
  name: "dropListPipe",
  standalone: true,
})
export class DropListConnectedPipe implements PipeTransform {
  transform(forms: any, i: number, property): any {
    console.log("pipeee");
    return "";
  }
}
