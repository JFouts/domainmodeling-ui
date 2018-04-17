import { Component, Input } from '@angular/core';
import { Term } from '../../models';

@Component({
  selector: 'app-terms',
  styleUrls: ['terms.component.scss'],
  templateUrl: 'terms.component.html'
})
export class TermsComponent {
  @Input()
  public terms: Term[] = [
    <Term>{ id: '1', name: 'Pharetra', definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam gravida felis ac ullamcorper. Etiam et purus gravida nisi aliquam fringilla.' },
    <Term>{ id: '2', name: 'Lorem', definition: 'Nulla at orci a tellus commodo egestas quis et lectus.' },
    <Term>{ id: '3', name: 'Ipsum', definition: 'Aliquam laoreet ullamcorper cursus. Phasellus dui neque, ornare ut est eget, bibendum euismod nulla.' },
    <Term>{ id: '4', name: 'Pellentesque', definition: 'Donec ultricies tellus sit amet ipsum viverra ornare. Vivamus odio ante, maximus vitae eros vel, imperdiet blandit sem. Proin et elit non velit porta dictum et eget velit. Pellentesque quis porta sem. Mauris egestas commodo risus in dignissim. Fusce nec ex scelerisque, venenatis nunc ac, tempus magna. Nulla condimentum mattis mauris et pellentesque. Donec egestas ultrices lorem, a cursus sem efficitur nec.' },
    <Term>{ id: '10', name: 'Donec', definition: 'Duis volutpat enim vel finibus finibus.' },
    <Term>{ id: '5', name: 'Fusce', definition: 'Vestibulum ultrices massa id felis dapibus venenatis. Phasellus at facilisis sapien.' },
    <Term>{ id: '6', name: 'Mauris', definition: 'Etiam imperdiet tellus sem, aliquet tristique lacus pretium eu. Mauris odio arcu, egestas eget velit eu, iaculis dignissim mi.' },
    <Term>{ id: '7', name: 'Malesuada', definition: 'Nam ultrices eros metus, id consectetur orci tincidunt ut.' },
    <Term>{ id: '8', name: 'Tempor', definition: 'Nullam tristique leo eros. Maecenas a pellentesque arcu, vitae sollicitudin sem. Phasellus faucibus est lacus, quis dignissim leo posuere nec. Donec finibus sollicitudin nisi non tincidunt.' },
    <Term>{ id: '9', name: 'Curabitur', definition: 'Nullam rhoncus dui nisl, vel malesuada enim porttitor vitae. ' }
  ];
}
