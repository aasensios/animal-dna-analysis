/**
 * @description Stores a Kit object, which has the purpose of collect DNA
 * samples from animals (saliva, blood, droppings, etc.).
 * @author Alejandro Asensio
 * @version 2019-03-04
 */
export class Kit {
  // Following the ngModel Angular Tour of Heroes tutorial:
  // https://angular.io/guide/forms
  // we only need to make public the attributes in constructor
  // in order to access them (avoiding getters and setters).

  public usage: string;
  public size?: string;
  public units?: number;
  public observations?: string;
  public submitter?: string;

  constructor(
    usage?: string,
    size?: string,
    units?: number,
    observations?: string,
    submitter?: string
  ) {  }

}
