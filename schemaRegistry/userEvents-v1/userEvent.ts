/***
 * User-Event schema class generated by the schema registry code bindings
 */
export class Event {
  'email': string;
  'isPremium': boolean;
  'userId': string;

  private static discriminator: string | undefined = undefined;

  private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "email",
      "baseName": "email",
      "type": "string"
    },
    {
      "name": "isPremium",
      "baseName": "isPremium",
      "type": "boolean"
    },
    {
      "name": "userId",
      "baseName": "userId",
      "type": "string"
    }];

  public static getAttributeTypeMap() {
    return Event.attributeTypeMap;
  }
}
