import React, {Component} from 'react';

import TimelinesChart from 'timelines-chart';

class TimelineChartContainer extends Component {
    constructor (props) {
        super(props);

        this.getMockupData = this.getMockupData.bind(this);
        this.createTimelineChart = this.createTimelineChart.bind(this);


        this.state = {
            data: {}
        };
    }

    createTimelineChart () {
        const data = this.state.data;
        var myPlot = TimelinesChart().width(window.innerWidth).zScaleLabel("My Scale Units"); 
        console.log(this.refs.timelineChart);
        myPlot(this.refs.timelineChart, data);
        console.log(myPlot);
    }

    getMockupData () {
        var NGROUPS = 6;
        var MAXLINES = 15;
        var MAXSEGMENTS = 20;
        var MINTIME = new Date(new Date() - 3*365*24*60*60*1000);

        function getGroupData() {

            function getSegmentsData() {

                var segData=[];

                var nSegments = Math.ceil(Math.random()*MAXSEGMENTS);
                var segMaxLength = Math.round(((new Date())-MINTIME)/nSegments);
                var runLength = MINTIME;

                for (var i=0; i< nSegments; i++) {
                    var tDivide = [Math.random(), Math.random()].sort();
                    var start = new Date(runLength.getTime() + tDivide[0]*segMaxLength);
                    var end = new Date(runLength.getTime() + tDivide[1]*segMaxLength);
                    runLength = new Date(runLength.getTime() + segMaxLength);
                    segData.push({
                        'timeRange': [start, end],
                        'val': Math.random()
                        //'labelVal': is optional - only displayed in the labels
                    });
                }

                return segData;

            }

            var grpData = [];

            for (var i=0, nLines=Math.ceil(Math.random()*MAXLINES); i<nLines; i++) {
                grpData.push({
                    'label': 'label' + (i+1),
                    'data': getSegmentsData()
                });
            }
            return grpData;
        }

        var data = [];

        for (var i=0; i< NGROUPS; i++) {
            data.push({
                'group': 'group' + (i+1),
                'data': getGroupData()
            }); 
        }

        console.log(data);
        this.setState({data: data});
        return data;
    }

    

    render () {

        return (<div className="timeline">
                    <h2>Hello</h2>
                    <button onClick={this.getMockupData}>Load Data</button>
                    <button onClick={this.createTimelineChart}>Create Chart</button>
                    <div ref="timelineChart" />
                </div>)
    }

} 

module.exports = TimelineChartContainer; 
