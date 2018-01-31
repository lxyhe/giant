import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes,Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
//图标数据；
 options:any = {
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };
  optionsSecond:any;
  /**
   * 树状图数据
   * @param {ActivatedRoute} public activa [description]
   */
  optionsTree = TREE_OPTION;
  mergeData = null;
  constructor(public activa:ActivatedRoute,public router:Router) { }

  ngOnInit() {
  	console.log(this.activa.snapshot.queryParams['id']);
  	 let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.optionsSecond = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
    /**
     * 树状图
     */
   TREE_OPTION.series[0].data = [TREE_DATA_1];
    TREE_OPTION.series[1].data = [TREE_DATA_2];

    this.mergeData = {
      series: TREE_OPTION.series
    };
  }
  //进入系统
  public enter(){
  	console.log('cs')
  	this.router.navigate(['/home/model/sorter'])
  }

}


const TREE_OPTION = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [{
      name: 'tree1',
      icon: 'rectangle'
    },
    {
      name: 'tree2',
      icon: 'rectangle'
    }],
    borderColor: '#c23531'
  },
  series: [
    {
      type: 'tree',
      name: 'tree1',
      data: [],
      top: '5%',
      left: '7%',
      bottom: '2%',
      right: '60%',

      symbolSize: 7,

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },

      expandAndCollapse: true,

      animationDuration: 550,
      animationDurationUpdate: 750

    },
    {
      type: 'tree',
      name: 'tree2',
      data: [],
      top: '20%',
      left: '60%',
      bottom: '22%',
      right: '18%',

      symbolSize: 7,

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },

      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};

const TREE_DATA_1 = {
  'name': 'flare',
  'children': [
    {
      'name': 'data',
      'children': [
        {
          'name': 'converters',
          'children': [
            { 'name': 'Converters', 'value': 721 },
            { 'name': 'DelimitedTextConverter', 'value': 4294 }
          ]
        },
        {
          'name': 'DataUtil',
          'value': 3322
        }
      ]
    },
    {
      'name': 'display',
      'children': [
        { 'name': 'DirtySprite', 'value': 8833 },
        { 'name': 'LineSprite', 'value': 1732 },
        { 'name': 'RectSprite', 'value': 3623 }
      ]
    },
    {
      'name': 'flex',
      'children': [
        { 'name': 'FlareVis', 'value': 4116 }
      ]
    },
    {
      'name': 'query',
      'children': [
        { 'name': 'AggregateExpression', 'value': 1616 },
        { 'name': 'And', 'value': 1027 },
        { 'name': 'Arithmetic', 'value': 3891 },
        { 'name': 'Average', 'value': 891 },
        { 'name': 'BinaryExpression', 'value': 2893 },
        { 'name': 'Comparison', 'value': 5103 },
        { 'name': 'CompositeExpression', 'value': 3677 },
        { 'name': 'Count', 'value': 781 },
        { 'name': 'DateUtil', 'value': 4141 },
        { 'name': 'Distinct', 'value': 933 },
        { 'name': 'Expression', 'value': 5130 },
        { 'name': 'ExpressionIterator', 'value': 3617 },
        { 'name': 'Fn', 'value': 3240 },
        { 'name': 'If', 'value': 2732 },
        { 'name': 'IsA', 'value': 2039 },
        { 'name': 'Literal', 'value': 1214 },
        { 'name': 'Match', 'value': 3748 },
        { 'name': 'Maximum', 'value': 843 },
        {
          'name': 'methods',
          'children': [
            { 'name': 'add', 'value': 593 },
            { 'name': 'and', 'value': 330 },
            { 'name': 'average', 'value': 287 },
            { 'name': 'count', 'value': 277 },
            { 'name': 'distinct', 'value': 292 },
            { 'name': 'div', 'value': 595 },
            { 'name': 'eq', 'value': 594 },
            { 'name': 'fn', 'value': 460 },
            { 'name': 'gt', 'value': 603 },
            { 'name': 'gte', 'value': 625 },
            { 'name': 'iff', 'value': 748 },
            { 'name': 'isa', 'value': 461 },
            { 'name': 'lt', 'value': 597 },
            { 'name': 'lte', 'value': 619 },
            { 'name': 'max', 'value': 283 },
            { 'name': 'min', 'value': 283 },
            { 'name': 'mod', 'value': 591 },
            { 'name': 'mul', 'value': 603 },
            { 'name': 'neq', 'value': 599 },
            { 'name': 'not', 'value': 386 },
            { 'name': 'or', 'value': 323 },
            { 'name': 'orderby', 'value': 307 },
            { 'name': 'range', 'value': 772 },
            { 'name': 'select', 'value': 296 },
            { 'name': 'stddev', 'value': 363 },
            { 'name': 'sub', 'value': 600 },
            { 'name': 'sum', 'value': 280 },
            { 'name': 'update', 'value': 307 },
            { 'name': 'variance', 'value': 335 },
            { 'name': 'where', 'value': 299 },
            { 'name': 'xor', 'value': 354 },
            { 'name': '_', 'value': 264 }
          ]
        },
        { 'name': 'Minimum', 'value': 843 },
        { 'name': 'Not', 'value': 1554 },
        { 'name': 'Or', 'value': 970 },
        { 'name': 'Query', 'value': 13896 },
        { 'name': 'Range', 'value': 1594 },
        { 'name': 'StringUtil', 'value': 4130 },
        { 'name': 'Sum', 'value': 791 },
        { 'name': 'Variable', 'value': 1124 },
        { 'name': 'Variance', 'value': 1876 },
        { 'name': 'Xor', 'value': 1101 }
      ]
    },
    {
      'name': 'scale',
      'children': [
        { 'name': 'IScaleMap', 'value': 2105 },
        { 'name': 'LinearScale', 'value': 1316 },
        { 'name': 'LogScale', 'value': 3151 },
        { 'name': 'OrdinalScale', 'value': 3770 },
        { 'name': 'QuantileScale', 'value': 2435 },
        { 'name': 'QuantitativeScale', 'value': 4839 },
        { 'name': 'RootScale', 'value': 1756 },
        { 'name': 'Scale', 'value': 4268 },
        { 'name': 'ScaleType', 'value': 1821 },
        { 'name': 'TimeScale', 'value': 5833 }
      ]
    }
  ]
};

const TREE_DATA_2 = {
  'name': 'flare',
  'children': [
    {
      'name': 'flex',
      'children': [
        { 'name': 'FlareVis', 'value': 4116 }
      ]
    },
    {
      'name': 'scale',
      'children': [
        { 'name': 'IScaleMap', 'value': 2105 },
        { 'name': 'LinearScale', 'value': 1316 },
        { 'name': 'LogScale', 'value': 3151 },
        { 'name': 'OrdinalScale', 'value': 3770 },
        { 'name': 'QuantileScale', 'value': 2435 },
        { 'name': 'QuantitativeScale', 'value': 4839 },
        { 'name': 'RootScale', 'value': 1756 },
        { 'name': 'Scale', 'value': 4268 },
        { 'name': 'ScaleType', 'value': 1821 },
        { 'name': 'TimeScale', 'value': 5833 }
      ]
    },
    {
      'name': 'display',
      'children': [
        { 'name': 'DirtySprite', 'value': 8833 }
      ]
    }
  ]
};
