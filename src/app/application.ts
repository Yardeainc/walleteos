import { TreeNode } from 'primeng/primeng';

export class Application {
  public applicationName: string;
  public user: string;
  public updated: string;
  public filenumber: Number;
  public status: string;
  public files: TreeNode[];

  constructor(applicationName: string, user: string, updated: string, filenumber: Number, status: string) {
     this.applicationName = applicationName;
     this.user = user;
     this.updated = updated;
     this.filenumber = filenumber;
     this.status = status;
  }
  
  public appendFiles(files: TreeNode[]) {
    this.files = files;
  }

}
