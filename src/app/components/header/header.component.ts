import { Component, HostListener, OnInit, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Acoes } from 'src/app/interface/acoes';
import { Fii } from 'src/app/interface/fii';
import { AcoesService } from 'src/app/service/acoes.service';
import { B3Service } from 'src/app/service/b3.service';
import { FiiService } from 'src/app/service/fii.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private acoesService: AcoesService, private fiiService: FiiService, config: NgbOffcanvasConfig,) {
		config.position = 'start';
	 }

	acao: Acoes[] = []
	fii: Fii[] = []

	ngOnInit(): void {
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.tela = window.innerWidth
	}

	private offcanvasService = inject(NgbOffcanvas);

	opens(content: TemplateRef<any>) {
		console.log(this.offcanvasService.hasOpenOffcanvas())
		if (this.offcanvasService.hasOpenOffcanvas() == false) {
			this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
				(result) => {
					this.closeResult = `Closed with: ${result}`;
				},
				(reason) => {
					this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
				},
			);
		}
	}

	autoComplete(nome: string) {
		if (nome.length >= 2) {
			this.acoesService.search(nome).subscribe(res => {
				this.acao = res
			})
			this.fiiService.search(nome).subscribe(res => {
				this.fii = res;
			})
		}
	}

	isNavbarSmall = false;
	tela = window.innerWidth

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isNavbarSmall = window.scrollY > 0;
	}

	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		if (this.modalService.hasOpenModals() == false) {
			this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
				(result) => {
					this.acao = []
					this.fii = []
					this.closeResult = `Closed with: ${result}`;
				},
				(reason) => {
					this.acao = []
					this.fii = []
					this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
				},
			);
		}

	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}


}
