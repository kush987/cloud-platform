import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-server',
  templateUrl: './choose-server.component.html',
  styleUrls: ['./choose-server.component.css']
})
export class ChooseServerComponent {
  systemoOption= [{
    number:1, 
    title:"Optimize server",
    desc:"Virtual machines for more demanding business apps, e.g. production websites, CI/CD, video transcoding, or larger databases.",
    type:"Dedicated vCPU"
  },{
    number:2,
    title:"Cloud Compute",
    desc:"Virtual machines for apps with bursty performance, e.g. low traffic websites, blogs, CMS, dev/test environments, and small databases.",
    type:"Shared vCPU"
  },{
    number:3,
    title:"Cloud Gpu",
    desc:"Virtual machines with fractional or full NVIDIA GPUs for AI, machine learning, HPC, visual computing and VDI. Also available as Bare Metal.",
    type:"NVIDIA GPU"
  },{
    number:4,
    title:"Bare Metal",
    desc:"Single tenant bare metal for apps with the most demanding performance or security requirements.",
    type:"Optional CPU + Optional GPU"
  }]
}
