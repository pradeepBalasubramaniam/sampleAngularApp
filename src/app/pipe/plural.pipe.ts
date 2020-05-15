import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "plural"
})
export class PluralPipe implements PipeTransform {
  transform(number: Number, text: string): any {
    const singular = number === 1;
    // If no text parameter was given, just return a conditional s.
    if (typeof text !== "string") return singular ? "" : "s";
    // Split with regex into group1/group2 or group1(group3)
    const match = text.match(/^([^()\/]+)(?:\/(.+))?(?:\((\w+)\))?/);
    // If no match, just append a conditional s.
    if (!match) return text + (singular ? "" : "s");
    // We have a good match, so fire away
    return (
      (singular && match[1]) || // Singular case
      match[2] || // Plural case: 'bagel/bagels' --> bagels
      match[1] + (match[3] || "s")
    ); // Plural case: 'bagel(s)' or 'bagel' --> bagels
  }
}
