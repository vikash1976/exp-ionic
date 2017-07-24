import { RepoDetailsPage } from './../repo-details/repo-details';
import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  profiles: any;
  github_user: any;
  repos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private githubService: GithubServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.github_user);
    this.github_user = '';
    this.repos = '';
  }

  showRepos(github_user) {
    console.log("Show Repos : " + github_user);
    this.getRepos(github_user);
  }

  reset() {
    this.profiles = '';
    this.repos = '';
    this.github_user = '';
  }

  getProfile(username) {
    this.githubService.getProfile(username).subscribe(response => {
      this.profiles = response;
      console.log(this.profiles);
    });
  }

  getRepos(username) {
    this.githubService.getRepositories(username).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    })
  }

  repoTapped(event, repo) {
    this.navCtrl.push(RepoDetailsPage, {
      repo: repo
    }, {
    direction: 'back', // default for push is 'forward'
    duration: 1000, // 2 seconds
    easing: 'ease-out'
});
  }


}
