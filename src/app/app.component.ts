import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dataset } from './dataset';
import { MaterialModule, MdToolbarModule, MdButton, MdButtonModule } from '@angular/material';

import {MenuModule, PanelMenuModule, MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    constructor(private router: Router) { }

    items: MenuItem[];

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    ngOnInit() {
      this.items = [
            {
                label: 'Home',
                icon: 'fa-home',
                command: (event) => {
                    this.router.navigate(['']);
                }
            },
            {
                label: 'Documentations',
                icon: 'fa-file-word-o',
                items: [
                    {label: 'Config API', icon: 'fa-file-word-o', 
                      command: (event) => {
                        this.router.navigate(['url', 'http://shelby.corp.toronto.ca/c3api_spec/?url=http://shelby.corp.toronto.ca:9080/c3api_config/v2/ConfigService.svc/$openapi#!/ContentSet/post_ContentSet']);
                      }
                    },
                    {label: 'DataAccess API', icon: 'fa-file-word-o', 
                      command: (event) => {
                        this.router.navigate(['url', 'http://shelby.corp.toronto.ca/c3api_spec/?url=https://was-intra-sit.toronto.ca/c3api_data/v2/DataAccess.svc/test/$openapi']);
                      }
                    },
                    {label: 'Secret API', icon: 'fa-file-word-o', 
                      command: (event) => {
                        this.router.navigate(['url', 'http://shelby.corp.toronto.ca/c3api_spec/']);
                      }
                    } 
                ]
            },
            {
                label: 'Schemas',
                icon: 'fa-info-circle',
                items: [
                    {label: 'ConfigAPI', icon: 'fa-info',
                     command: (event) => {
                        this.router.navigate(['url', 'http://shelby.corp.toronto.ca:9080/c3api_config/v2/ConfigService.svc/$metadata']);
                      }},
                    {label: 'DataAccessAPI', icon: 'fa-info',
                     command: (event) => {
                        this.router.navigate(['url', 'https://was-intra-sit.toronto.ca/c3api_data/v2/DataAccess.svc/$metadata']);
                      }},
                    {label: 'SecretAPI', icon: 'fa-info',
                     command: (event) => {
                        this.router.navigate(['url', 'http://shelby.corp.toronto.ca:9080/c3api_config/v2/SecretKeyService.svc/$metadata']);
                    }}
                ]
            }
        ];
    }

    onDataset() {
       this.router.navigate(['applist']);
    }
    
    onHistory() {
       this.router.navigate(['historylist']);
    }

    onProbe() {
       this.router.navigate(['probe']);
    }
  
    onHome() {
       this.router.navigate(['applist']);
    }

}
