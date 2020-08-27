
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>PagedTaxInvoice complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="PagedTaxInvoice"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CurrentPage" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="MaxIndex" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="CountPerPage" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="MaxPageNum" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="SimpleTaxInvoiceList" type="{http://ws.baroservice.com/}ArrayOfSimpleTaxInvoice" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PagedTaxInvoice", propOrder = {
    "currentPage",
    "maxIndex",
    "countPerPage",
    "maxPageNum",
    "simpleTaxInvoiceList"
})
public class PagedTaxInvoice {

    @XmlElement(name = "CurrentPage")
    protected int currentPage;
    @XmlElement(name = "MaxIndex")
    protected int maxIndex;
    @XmlElement(name = "CountPerPage")
    protected int countPerPage;
    @XmlElement(name = "MaxPageNum")
    protected int maxPageNum;
    @XmlElement(name = "SimpleTaxInvoiceList")
    protected ArrayOfSimpleTaxInvoice simpleTaxInvoiceList;

    /**
     * currentPage 속성의 값을 가져옵니다.
     * 
     */
    public int getCurrentPage() {
        return currentPage;
    }

    /**
     * currentPage 속성의 값을 설정합니다.
     * 
     */
    public void setCurrentPage(int value) {
        this.currentPage = value;
    }

    /**
     * maxIndex 속성의 값을 가져옵니다.
     * 
     */
    public int getMaxIndex() {
        return maxIndex;
    }

    /**
     * maxIndex 속성의 값을 설정합니다.
     * 
     */
    public void setMaxIndex(int value) {
        this.maxIndex = value;
    }

    /**
     * countPerPage 속성의 값을 가져옵니다.
     * 
     */
    public int getCountPerPage() {
        return countPerPage;
    }

    /**
     * countPerPage 속성의 값을 설정합니다.
     * 
     */
    public void setCountPerPage(int value) {
        this.countPerPage = value;
    }

    /**
     * maxPageNum 속성의 값을 가져옵니다.
     * 
     */
    public int getMaxPageNum() {
        return maxPageNum;
    }

    /**
     * maxPageNum 속성의 값을 설정합니다.
     * 
     */
    public void setMaxPageNum(int value) {
        this.maxPageNum = value;
    }

    /**
     * simpleTaxInvoiceList 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfSimpleTaxInvoice }
     *     
     */
    public ArrayOfSimpleTaxInvoice getSimpleTaxInvoiceList() {
        return simpleTaxInvoiceList;
    }

    /**
     * simpleTaxInvoiceList 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfSimpleTaxInvoice }
     *     
     */
    public void setSimpleTaxInvoiceList(ArrayOfSimpleTaxInvoice value) {
        this.simpleTaxInvoiceList = value;
    }

}
