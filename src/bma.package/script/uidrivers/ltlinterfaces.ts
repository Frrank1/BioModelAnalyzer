// Copyright (c) Microsoft Research 2016
// License: MIT. See LICENSE
/// <reference path="..\..\Scripts\typings\jquery\jquery.d.ts"/>
/// <reference path="..\..\Scripts\typings\jqueryui\jqueryui.d.ts"/>

module BMA {
    export module UIDrivers {

        export interface ILTLViewer {
            Show(p: string);
            Hide(p: string);
            SetResult(result);
            GetTemporalPropertiesViewer(): BMA.UIDrivers.ITemporalPropertiesViewer;
            GetStatesViewer(): BMA.UIDrivers.IStatesViewer;
            SetOnTabExpandedCallback(callback);
            ShowTabWaitIcon();
            HideTabWaitIcon();
        }

        export interface IKeyframesList {
            AddState(items);
            GetContent();
        }

        export interface IKeyframesFull {
            AddState(items);
            GetContent();
            RemovePart(keyframe, ind);
        }

        export interface IStatesEditor {
            SetStates(states: BMA.LTLOperations.Keyframe[]);
            SetModel(model: BMA.Model.BioModel, layout: BMA.Model.Layout);
            Show();
            Hide();
        }

        export interface IStatesViewer {
            SetCommands(commands: BMA.CommandRegistry);
            SetStates(states: BMA.LTLOperations.Keyframe[]);
        }

        export interface ITemporalPropertiesEditor {
            Show();
            Hide();
            SetStates(states: BMA.LTLOperations.Keyframe[]);
            GetSVGDriver(): ISVGPlot;
            GetNavigationDriver(): INavigationPanel;
            GetDragService(): IElementsPanel;
            GetContextMenuDriver(): IContextMenu;
            HighlightCopyZone(isHighlighted: boolean);
            HighlightDeleteZone(isHighlighted: boolean);
            GetCopyZoneBBox(): {
                x: number; y: number; width: number; height: number
            };
            GetDeleteZoneBBox(): {
                x: number; y: number; width: number; height: number
            };
            SetCopyZoneVisibility(isVisible: boolean);
            SetDeleteZoneVisibility(isVisible: boolean);
            SetFitToViewCallback(callback: Function);
            SetCopyZoneIcon(operation: BMA.LTLOperations.Operation);
            SetFormulasEditorCallback(callback: Function);
            ShowFormulaEditor(formula: string);
            HideFormulaEditor();
        }

        export interface ITemporalPropertiesViewer {
            SetOperations(operations: { operation: BMA.LTLOperations.IOperand; status: string }[]);
            Refresh();
        }

        export interface ILTLResultsViewerFactory {
            CreateCompactLTLViewer(div: JQuery): ICompactLTLResultsViewer;
        }

        export interface ICompactLTLResultsViewer {
            SetStatus(status: string, message?: string);
            SetMessage(message: string);
            GetMessage(): string;
            Collapse();
            Expand();
            SetSteps(steps: number);
            GetSteps(): number;
            SetLTLRequestedCallback(callback: Function);
            SetOnExpandedCallback(callback: Function);
            SetShowResultsCallback(callback: Function);
            SetOnStepsChangedCallback(callback: Function);
            Destroy();
        }

        export interface ILTLResultsViewer {
            Show();
            Hide();
            SetData(model: BMA.Model.BioModel, layout: BMA.Model.Layout, ticks: any, states: BMA.LTLOperations.Keyframe[]); //to do: Set proper type for ticks
            SetOnExportCSV(callback);
            SetOnCreateStateRequested(callback);
            UpdateStateFromModel(model: BMA.Model.BioModel, states: BMA.LTLOperations.Keyframe[]);
        }
    }
} 
