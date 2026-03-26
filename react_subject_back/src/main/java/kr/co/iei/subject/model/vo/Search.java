package kr.co.iei.subject.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Search {
	private String level;
	private String keyword;
	private String order;
	private String category;
	private String sort;
}
