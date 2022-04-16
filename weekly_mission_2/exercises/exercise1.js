const repo = {
    name: "LaunchX",
    author: "GermanHv",
    languaje: "JavaScript",
    numberOfCommits: 70,
    stars: 1,
    forks:2,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
      },
      getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
      }
     }
     
   //Ejercicio 1 example  
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue= {
    title: "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status:"Open",
    numberOfComments: 20,
    labels:["Live 3", "PROXIMO LIVE", "Semana-2"],
    author:"carlogilmar",
    dateCreated:14/04/22,
    lastUpdated:"2 days ago",

    getTitleAndAuthor: function(){
        return `Title of issue: ${this.title} and name of author: ${this.author}`
    },
    getGeneralInfo: function(){
        return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
      }
}
// exercise 2
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const PullRequest = {
    title: "Mi primer PR",
    author: "jsd04",
    branchName: "main",
    dateCreated:"1 horu ago",
    status:"open",
    repositoryNameAssociated:"visualpartnership/launch-x-explorers",
    getStatus: function(){
        return `Status ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `Title of issue: ${this.title} and name of author: ${this.author}`
    }
}
// exercise3
console.log(PullRequest.getStatus());
console.log(PullRequest.getTitleAndAuthor());
