import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyD1Y5LwClbLPgGCfu2z7_tannHuYIRerrU';

class App extends React.Component{

    componentDidMount() {
        this.onTermSubmit('nature');
    }

    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search',{
           params: {
               q: term,
            part: 'snippet',
            maxResults: 5,
            key: KEY
           } 
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <br/>
                <div class="ui two column centered grid">
                    <p className="ui"> <span className="bold"> Project:</span> Youtube API created with ReactJS, Axios and Semantic UI </p>
                </div>
                <br/>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App